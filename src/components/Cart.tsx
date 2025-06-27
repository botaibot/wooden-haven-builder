
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
        title: "Корзина пуста",
        description: "Добавьте товары в корзину перед оформлением заказа",
        variant: "destructive",
      });
      return;
    }
    setShowCheckoutForm(true);
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderForm.name || !orderForm.email || !orderForm.phone || !orderForm.address) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Webhook URL для отправки заказа
    const webhookUrl = 'https://hook.eu2.make.com/5cwhtg1q0ri4qpvw3ihaueqonng7g8a0';
    
    // Формируем данные заказа
    const orderData = {
      orderType: "Материалы",
      customerName: orderForm.name,
      customerEmail: orderForm.email,
      customerPhone: orderForm.phone,
      deliveryAddress: `${orderForm.address}, ${orderForm.city} ${orderForm.postalCode}`,
      notes: orderForm.notes,
      items: items.map(item => ({
        title: item.title,
        size: item.size,
        quantity: item.quantity,
        price: item.price,
        total: item.price * item.quantity
      })),
      totalItems: getTotalItems(),
      totalPrice: getTotalPrice(),
      orderDate: new Date().toISOString()
    };
    
    try {
      console.log("Отправка заказа на webhook:", webhookUrl, orderData);
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(orderData),
      });
      
      toast({
        title: "Заказ отправлен!",
        description: "Мы получили ваш заказ и свяжемся с вами в ближайшее время",
      });
      
      // Очищаем корзину и форму
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
      console.error("Ошибка при отправке заказа:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заказ. Пожалуйста, попробуйте позже.",
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
          aria-label="Корзина"
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
          <SheetTitle className="text-center text-xl">Корзина</SheetTitle>
        </SheetHeader>
        
        {!showCheckoutForm ? (
          <>
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64">
                <Package className="h-12 w-12 text-gray-400" />
                <p className="mt-4 text-gray-500 text-center">
                  Ваша корзина пуста
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
                        <p className="text-nature-dark font-semibold">€{item.price.toFixed(2)} / шт</p>
                        
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
                    <span>Итого:</span>
                    <span>€{getTotalPrice().toFixed(2)}</span>
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-wood hover:bg-wood-dark relative z-[100000]"
                    onClick={handleCheckout}
                  >
                    Оформить заказ
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
                ← Вернуться к корзине
              </Button>
            </div>
            
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={orderForm.name}
                    onChange={handleInputChange}
                    placeholder="Ваше имя"
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
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={orderForm.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Адрес доставки *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={orderForm.address}
                    onChange={handleInputChange}
                    placeholder="Улица, дом, квартира"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">Город</Label>
                    <Input
                      id="city"
                      name="city"
                      value={orderForm.city}
                      onChange={handleInputChange}
                      placeholder="Город"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Индекс</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={orderForm.postalCode}
                      onChange={handleInputChange}
                      placeholder="12345"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="notes">Комментарий</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={orderForm.notes}
                    onChange={handleInputChange}
                    placeholder="Дополнительные пожелания"
                    rows={3}
                  />
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold text-lg mb-4">
                  <span>Итого к доставке:</span>
                  <span>€{getTotalPrice().toFixed(2)}</span>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-wood text-white hover:bg-wood-dark relative z-[100000]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка заказа..." : "Подтвердить заказ"}
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
