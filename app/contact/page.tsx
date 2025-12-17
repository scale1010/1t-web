"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  User,
  X,
  ExternalLink
} from "lucide-react"

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              We are here to help you! Whether you have a question about our products, an issue with an order, or need to reach our support team, please use the contact methods below.
            </p>
          </div>
        </div>
      </section>

      {/* General Enquiries & Customer Support */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">General Enquiries & Customer Support</h2>
            <p className="text-xl text-muted-foreground">Our standard support team is available during business hours to assist with product information, ordering, and general questions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Email</h3>
                </div>
                <a 
                  href="mailto:connect@scalewalk.com" 
                  className="text-primary hover:underline text-lg"
                >
                  connect@scalewalk.com
                </a>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-3 mb-4">
                    <X className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Social Media</h3>
                  </div>
                  <a 
                    href="https://x.com/1thoughtai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-lg flex items-center gap-1"
                  >
                    <span>@1thoughtai</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Phone</h3>
                </div>
                <a 
                  href="tel:+91-xxxxxxxxxx" 
                  className="text-primary hover:underline text-lg"
                >
                  +91-9899954154
                </a>
                <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <div>
                    <p className="text-sm font-medium">Monday to Friday</p>
                    <p className="text-sm">Saturday, Sunday, and Public Holidays: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registered & Operational Address */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Registered & Operational Address</h2>
            <p className="text-xl text-muted-foreground">This is our official business address in India.</p>
          </div>
          <Card className="border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">ScaleWalk Private Limited</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    EB 191, Maya Enclave, <br />
                    New Delhi, 110001, <br />
                    India
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Grievance Redressal Officer */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Grievance Redressal Officer</h2>
            
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              If your query is related to compliance, a payment dispute, or an unresolved complaint, please contact our Grievance Redressal Officer directly.
            </p>
          </div>
          <Card className="border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Designation</p>
                    <p className="text-lg font-semibold">Grievance Redressal Officer</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                    <a 
                      href="mailto:connect@scalewalk.com" 
                      className="text-primary hover:underline text-lg"
                    >
                      grievance-officer@scalewalk.com
                    </a>
                  </div>
                </div>
                
                
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> For faster resolution, please ensure you mention your Order ID or Transaction ID in all communications with the Grievance Redressal Officer.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <SiteFooter />
      <ChatInterface />
    </div>
  )
}

