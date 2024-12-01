import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  title: string;
  image: string;
  content: string;
  rating: number;
  featured?: boolean;
}

const testimonials: TestimonialProps[] = [
  {
    name: "陳建志醫師",
    title: "心臟科主任醫師",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    content: "作為一名心臟科醫師，我強烈推薦這款智能手錶。它的心率監測功能非常精準，能夠及時發現異常心律，對心臟病患者的日常監測極為有幫助。",
    rating: 5,
    featured: true
  },
  {
    name: "林美玲博士",
    title: "睡眠中心研究員",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    content: "這款手錶的睡眠追蹤功能令人印象深刻。它能準確記錄睡眠階段，幫助使用者了解自己的睡眠品質，對改善睡眠習慣有很大幫助。",
    rating: 5
  },
  {
    name: "王大明教練",
    title: "專業健身教練",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    content: "作為健身教練，我特別欣賞這款手錶的運動追蹤功能。它不僅能準確記錄運動數據，還能提供專業的訓練建議，是健身愛好者的最佳夥伴。",
    rating: 5,
    featured: true
  }
];

function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
  return (
    <Card className={`p-6 ${testimonial.featured ? "md:col-span-2 bg-primary/5" : "bg-card"}`}>
      <div className="flex items-start gap-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={testimonial.image} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold">{testimonial.name}</h3>
            {testimonial.featured && (
              <Badge variant="default" className="text-xs">
                特別推薦
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-2">{testimonial.title}</p>
          <div className="flex items-center gap-0.5 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-muted-foreground">{testimonial.content}</p>
        </div>
      </div>
    </Card>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">專業人士推薦</h2>
          <p className="text-xl text-muted-foreground">
            來自各領域專家的真實評價，見證產品的專業性能
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
