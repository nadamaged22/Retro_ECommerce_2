import React from 'react'
import Image from 'next/image'

export default function About(){
  return (
    <div className="space-y-6">
      {/* Header banner — thrift-shopping image faded behind text */}
      <header className="relative bg-white p-6 rounded-lg border-2 border-retroTan overflow-hidden min-h-[120px]">
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src="/thrift-shopping.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ opacity: 0.18, mixBlendMode: 'multiply' }}
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold" style={{fontFamily:'Playfair Display'}}>Next Gen — Make it Viral</h1>
          <p className="mt-2">We blend vintage aesthetics with modern trends to create unique pieces that express individuality, freedom, and confidence.</p>
        </div>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border-2 border-retroTan">
          <h3 className="font-semibold">Who We Are (EN)</h3>
          <p className="mt-2">We are a fashion brand inspired by the bold spirit of the 70s and 80s, reimagined for Gen Z and Alpha. We blend vintage aesthetics with modern trends to create unique pieces that express individuality, freedom, and confidence. Every piece is a fusion of past and present, designed to fit today's lifestyle with a fresh nostalgic twist.</p>
        </div>
        <div className="bg-white p-6 rounded-lg border-2 border-retroTan" dir="rtl">
          <h3 className="font-semibold">من نحن (AR)</h3>
          <p className="mt-2">نحن براند أزياء مستوحى من روح السبعينات والثمانينات، نعيد تقديم الستايل الكلاسيك برؤية عصرية تناسب جيل Gen Z وAlpha. نمزج بين الفينتج والتريند الحديث لنقدم قطعاً فريدة تجمع بين الجرأة، الحرية، والتعبير عن الشخصية.</p>
        </div>
      </section>

      {/* Mission/Vision cards + disco ball decoration */}
      <div className="relative">
        {/* Floating disco ball — visible only on md+ screens */}
        <div className="hidden md:block absolute -right-4 -top-6 w-28 h-28 pointer-events-none select-none z-0 opacity-60">
          <Image
            src="/disco-ball.jpg"
            alt="Decorative disco ball illustration"
            fill
            sizes="112px"
            className="object-contain drop-shadow-md"
          />
        </div>

        <section className="grid md:grid-cols-3 gap-4 mt-6 relative z-10">
          <div className="card-retro">
            <h4 className="font-bold">Mission</h4>
            <p className="mt-2">To revive vintage fashion styles and present them with a modern approach, inspiring Gen Z and Alpha generations.</p>
          </div>
          <div className="card-retro">
            <h4 className="font-bold">Vision</h4>
            <p className="mt-2">To revive 70s and 80s fashion with a modern Gen Z & Alpha twist.</p>
          </div>
          <div className="card-retro">
            <h4 className="font-bold">Why Choose Us</h4>
            <p className="mt-2">We blend iconic 70s & 80s style with today's trends, creating a look that balances authenticity and modern edge.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
