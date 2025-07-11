'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, I do not accept insurance directly. However, I provide a superbill for each session that you can submit to your insurance company for potential reimbursement. This allows me to focus entirely on your care without insurance restrictions affecting your treatment. I accept cash, check, and all major credit cards."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes, I offer virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Online therapy is just as effective as in-person sessions for many clients and provides the convenience of receiving care from the comfort of your own home. All virtual sessions are conducted through a secure, HIPAA-compliant platform."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24-hour notice for any cancellations or rescheduling. This allows me to potentially offer that time slot to another client who may need it. Cancellations made with less than 24 hours' notice will be charged the full session fee. Emergency situations are handled on a case-by-case basis with understanding and flexibility."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Individual therapy sessions are typically 50 minutes long, while couples sessions are 60 minutes. This allows adequate time to dive deep into the work while maintaining clear boundaries. The frequency of sessions depends on your individual needs, but most clients start with weekly sessions and may adjust as progress is made."
    },
    {
      question: "How do I know if therapy is right for me?",
      answer: "Therapy can be beneficial for anyone looking to improve their mental health, work through challenges, or grow personally. If you're experiencing persistent anxiety, relationship difficulties, trauma symptoms, or simply want to develop better coping skills, therapy can help. I offer a free 15-minute consultation to discuss your needs and determine if we're a good fit."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about starting therapy
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                  <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-gray-900 hover:text-teal-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}