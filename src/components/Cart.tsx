
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Plus, Minus, Package } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalItems, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckout = () => {
    setIsOpen(false);
    toast({
      title: "Заказ оформлен",
      description: "Мы свяжемся с вами для подтверждения заказа",
    });
    navigate("/contact");
    clearCart();
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
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-center text-xl">Корзина</SheetTitle>
        </SheetHeader>
        
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
                className="w-full mt-4 bg-wood hover:bg-wood-dark"
                onClick={handleCheckout}
              >
                Оформить заказ
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
