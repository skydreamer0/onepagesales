import { Activity, Battery, Heart, Smartphone, Star, Shield, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const features = [
  {
    title: "24小時健康監測",
    description: "持續追蹤心率、血氧和睡眠品質，為您的健康把關。",
    icon: Heart,
  },
  {
    title: "超長續航力",
    description: "單次充電可使用長達7天，隨時隨地掌握健康數據。",
    icon: Battery,
  },
  {
    title: "運動模式追蹤",
    description: "支援超過100種運動模式，精準記錄您的運動表現。",
    icon: Activity,
  },
  {
    title: "智能通知提醒",
    description: "即時接收手機通知，重要訊息不錯過。",
    icon: Smartphone,
  },
];

const testimonials = [
  {
    name: "張醫師",
    title: "心臟科專家",
    content: "作為一名醫生，我強烈推薦這款智能手環。它的心率監測精準度令人印象深刻，對於需要持續監控心臟健康的患者來說是很好的選擇。",
    rating: 5,
    avatar: "/avatars/doctor.jpg"
  },
  {
    name: "王教練",
    title: "專業健身教練",
    content: "這是我用過最好的運動追蹤器，多種運動模式和精準的數據分析，幫助我的客戶更好地達成健身目標。",
    rating: 5,
    avatar: "/avatars/trainer.jpg"
  },
  {
    name: "李小姐",
    title: "瑜珈工作室老闆",
    content: "電池續航力真的很驚人！一週才需要充電一次，對經常忙碌的我來說非常方便。",
    rating: 5,
    avatar: "/avatars/yoga.jpg"
  },
  {
    name: "陳教授",
    title: "運動科學研究員",
    content: "從專業角度來看，這款手環的數據準確度相當高，特別是在運動時的即時心率監測和疲勞度評估方面，對運動研究很有幫助。",
    rating: 5,
    avatar: "/avatars/professor.jpg"
  },
  {
    name: "林醫師",
    title: "睡眠中心主任",
    content: "這款手環的睡眠監測功能非常出色，能夠準確識別各個睡眠階段，對於想要改善睡眠品質的人來說是很好的選擇。",
    rating: 5,
    avatar: "/avatars/sleep-doctor.jpg"
  },
  {
    name: "黃先生",
    title: "馬拉松選手",
    content: "在訓練過程中，這款手環的GPS定位非常準確，配速提醒功能也很實用。防水性能出色，即使是長時間的戶外運動也不用擔心。",
    rating: 5,
    avatar: "/avatars/runner.jpg"
  },
  {
    name: "吳醫師",
    title: "復健科醫生",
    content: "對於需要進行復健訓練的患者來說，這款手環的活動追蹤和提醒功能很有幫助，可以更好地監控患者的運動量和恢復情況。",
    rating: 5,
    avatar: "/avatars/rehab-doctor.jpg"
  },
  {
    name: "謝教練",
    title: "游泳教練",
    content: "防水性能超乎預期，游泳時可以精確記錄划水次數和距離。對想要提升游泳技巧的人來說是很好的訓練夥伴。",
    rating: 5,
    avatar: "/avatars/swim-coach.jpg"
  }
];

const trustIndicators = [
  {
    icon: Shield,
    title: "品質保證",
    description: "通過國際認證，品質有保障"
  },
  {
    icon: Award,
    title: "榮獲獎項",
    description: "2023年度最佳穿戴式設備"
  },
  {
    icon: Star,
    title: "用戶好評",
    description: "超過10萬名用戶五星好評"
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">革命性功能</h2>
          <p className="text-xl text-muted-foreground">
            打造專屬於您的智能生活體驗
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardHeader className="items-center">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 專家推薦輪播區塊 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">專業人士推薦</h2>
          <p className="text-xl text-muted-foreground mb-12">
            聽聽專家怎麼說
          </p>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">
                            {testimonial.name[0]}
                          </span>
                        </div>
                        <div className="text-left">
                          <h3 className="font-bold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-left">
                      {testimonial.content}
                    </p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Trust Indicators Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">值得信賴的品質</h2>
          <p className="text-xl text-muted-foreground mb-12">
            超過100萬用戶的共同選擇
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {trustIndicators.map((indicator) => (
              <div key={indicator.title} className="flex flex-col items-center">
                <indicator.icon className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{indicator.title}</h3>
                <p className="text-muted-foreground">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}