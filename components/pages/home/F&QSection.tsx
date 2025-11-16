import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "چگونه بلیط هواپیما رزرو کنم؟",
    answer:
      "با وارد کردن مبدا، مقصد و تاریخ سفر در فرم جستجو، بهترین گزینه‌ها را ببینید و با چند کلیک رزرو کنید.",
  },
  {
    question: "آیا امکان استرداد بلیط وجود دارد؟",
    answer:
      "بله، بسته به قوانین ایرلاین، امکان استرداد آنلاین یا با پشتیبانی وجود دارد. جریمه طبق قوانین اعمال می‌شود.",
  },
  {
    question: "چگونه از تخفیف‌ها مطلع شوم؟",
    answer:
      "با عضویت در خبرنامه و دنبال کردن شبکه‌های اجتماعی، از کدهای تخفیف و پیشنهادات ویژه باخبر شوید.",
  },
  {
    question: "پرداخت امن است؟",
    answer:
      "تمام پرداخت‌ها از طریق درگاه‌های معتبر بانکی و با پروتکل SSL انجام می‌شود. امنیت شما اولویت ماست.",
  },
];

export default function FAQSection() {
  return (
    <section className="my-12 sm:mt-16 lg:mt-20">
      <h3 className="mb-6 text-xl font-medium text-gray-700 sm:text-2xl">
        سوالات متداول
      </h3>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            type="single"
            collapsible
            defaultValue="item-0"
          >
            <AccordionItem
              value={`item-${index}`}
              className="border-gray-2 rounded-lg border p-2 text-gray-600"
            >
              <AccordionTrigger className="text-right text-base sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-right text-sm leading-relaxed text-gray-600 sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
