"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award } from "lucide-react"

export default function SkillsSection({ skills }: { skills: any }) {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 lg:px-96 xl:px-[400px] 2xl:px-[500px] relative overflow-hidden">
      {/* Animated gradient blur background for dark mode */}
      <div className="absolute inset-0 -z-10 dark:block hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-8xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-20 animate-fade-in-up">Skills & Expertise</h2>

        <Tabs defaultValue="Tech Stack" className="w-full animate-fade-in-up">
          <TabsList className="grid w-full grid-cols-4 mb-16 bg-muted h-14">
            <TabsTrigger value="Tech Stack" className="text-base">
              Tech Stack
            </TabsTrigger>
            <TabsTrigger value="Design & UI" className="text-base">
              Design & UI
            </TabsTrigger>
            <TabsTrigger value="Database" className="text-base">
              Database
            </TabsTrigger>
            <TabsTrigger value="DevOps" className="text-base">
              DevOps
            </TabsTrigger>
          </TabsList>

          {Object.entries(skills).map(([category, skillList]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(skillList as any[]).map((skill: any, index: number) => (
                  <Card
                    key={index}
                    className="bg-gray-800 border border-white text-white shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-stagger"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8 text-white">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-2 bg-primary/10 rounded-lg">{skill.icon}</div>
                        <div className="flex flex-col gap-1">
                          <h3 className="font-semibold text-xl flex items-center gap-2">{skill.name}
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${skill.status === 'Expert' ? 'bg-green-600 text-white' : 'bg-yellow-500 text-white'}`}>{skill.status}</span>
                          </h3>
                        </div>
                      </div>
                      <div className="space-y-3 mb-6">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Pengalaman:</span> {skill.duration}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Projects:</span> {skill.projects}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
} 