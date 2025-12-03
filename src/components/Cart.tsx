
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShoppingCart, X, Plus, Minus, Package } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalItems, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOrderForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Carrito vacío",
        description: "Agregue productos al carrito antes de realizar el pedido",
        variant: "destructive",
      });
      return;
    }
    setShowCheckoutForm(true);
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderForm.name || !orderForm.email || !orderForm.phone) {
      toast({
        title: "Error",
        description: "Por favor, complete todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    const webhookUrl = 'https://casamodul.app.n8n.cloud/webhook/38071c0f-bd68-4f65-956b-c89a4b8aabd6';
    
    // Formamos los datos del pedido
    const orderData = {
      order_type: "Materiales",
      name: orderForm.name,
      email: orderForm.email,
      phone: orderForm.phone,
      address: orderForm.address,
      city: orderForm.city,
      postalCode: orderForm.postalCode,
      notes: orderForm.notes || '',
      items: items.map(item => ({
        title: item.title,
        size: item.size,
        quantity: item.quantity,
        price: item.price,
        total: item.price * item.quantity
      })),
      total_items: getTotalItems(),
      total_price: getTotalPrice(),
      order_date: new Date().toISOString()
    };
    
    try {
      console.log("Enviando pedido al webhook:", webhookUrl, orderData);
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(orderData)
      });
      
      toast({
        title: "¡Pedido enviado!",
        description: "Hemos recibido su pedido y nos pondremos en contacto con usted en breve",
      });
      
      // Limpiamos el carrito y el formulario
      clearCart();
      setOrderForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        notes: "",
      });
      setShowCheckoutForm(false);
      setIsOpen(false);
    } catch (error) {
      console.error("Error al enviar el pedido:", error);
      toast({
        title: "Error",
        description: "No se pudo enviar el pedido. Por favor, inténtelo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCartClick = () => {
    console.log("Cart clicked, current items:", items);
    console.log("Total items:", getTotalItems());
    setIsOpen(true);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="relative bg-white hover:bg-gray-50"
          aria-label="Carrito"
          onClick={handleCartClick}
        >
          <ShoppingCart className="h-5 w-5" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
              {getTotalItems()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto z-[99999]">
        <SheetHeader>
          <SheetTitle className="text-center text-xl">Carrito</SheetTitle>
        </SheetHeader>
        
        {!showCheckoutForm ? (
          <>
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64">
                <Package className="h-12 w-12 text-gray-400" />
                <p className="mt-4 text-gray-500 text-center">
                  Su carrito está vacío
                </p>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                {items.map((item) => {
                  console.log("Rendering cart item:", item);
                  return (
                    <div key={`${item.id}-${item.size}`} className="flex gap-4 border-b pb-4">
                      <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            console.error("Image load error:", item.imageUrl);
                            e.currentTarget.src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm truncate">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.size}</p>
                        <p className="text-nature-dark font-semibold">€{item.price.toFixed(2)} / ud</p>
                        
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.id, item.size, Math.max(1, item.quantity - 1))}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-7 w-7"
                            onClick={() => removeFromCart(item.id, item.size)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span>€{getTotalPrice().toFixed(2)}</span>
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-wood hover:bg-wood-dark relative z-[100000]"
                    onClick={handleCheckout}
                  >
                    Realizar pedido
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="mt-6">
            <div className="mb-4">
              <Button 
                variant="ghost" 
                onClick={() => setShowCheckoutForm(false)}
                className="p-0 h-auto text-sm"
              >
                ← Volver al carrito
              </Button>
            </div>
            
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={orderForm.name}
                    onChange={handleInputChange}
                    placeholder="Su nombre"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={orderForm.email}
                    onChange={handleInputChange}
                    placeholder="example@mail.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={orderForm.phone}
                    onChange={handleInputChange}
                    placeholder="+34 (999) 123-45-67"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Dirección de entrega</Label>
                  <Input
                    id="address"
                    name="address"
                    value={orderForm.address}
                    onChange={handleInputChange}
                    placeholder="Calle, número, piso (opcional)"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">Ciudad</Label>
                    <Input
                      id="city"
                      name="city"
                      value={orderForm.city}
                      onChange={handleInputChange}
                      placeholder="Ciudad"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Código postal</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={orderForm.postalCode}
                      onChange={handleInputChange}
                      placeholder="38000"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="notes">Comentario</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={orderForm.notes}
                    onChange={handleInputChange}
                    placeholder="Deseos adicionales"
                    rows={3}
                  />
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold text-lg mb-4">
                  <span>Total a entregar:</span>
                  <span>€{getTotalPrice().toFixed(2)}</span>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-wood text-white hover:bg-wood-dark relative z-[100000]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando pedido..." : "Confirmar pedido"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
