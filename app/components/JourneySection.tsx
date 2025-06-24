"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Code, Calendar, Users } from "lucide-react"

export default function JourneySection({ experiences, education, organizations }: { experiences: any[]; education: any[]; organizations: any[] }) {
  return (
    <section id="journey" className="py-16 px-4 md:px-8 lg:px-96 xl:px-[400px] 2xl:px-[500px] bg-muted/30 relative overflow-hidden">
      {/* Animated gradient blur background for dark mode */}
      <div className="absolute inset-0 -z-10 dark:block hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-8xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column - Experience Tabs */}
          <div className="space-y-16 animate-slide-in-left">
            <div>
              <h2 className="text-4xl font-bold mb-10 flex items-center gap-4 animate-fade-in-up">
                <Briefcase className="w-10 h-10" />
                Experience
              </h2>
              <Tabs defaultValue="work" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted h-14">
                  <TabsTrigger value="work" className="text-base">Work</TabsTrigger>
                  <TabsTrigger value="education" className="text-base">Education</TabsTrigger>
                  <TabsTrigger value="organization" className="text-base">Organization</TabsTrigger>
                </TabsList>
                <TabsContent value="work">
                  <div className="space-y-4">
                    {experiences.map((exp, index) => (
                      <Card
                        key={index}
                        className="bg-gray-800 border border-white text-white shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-stagger"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardContent className="p-8 text-white">
                          <h3 className="font-semibold text-xl">{exp.title}</h3>
                          <p className="text-muted-foreground text-lg">{exp.company}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-3">
                            <Calendar className="w-4 h-4" />
                            {exp.year}
                          </p>
                          {exp.description && (
                            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{exp.description}</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="education">
                  <div className="space-y-4">
                    {education.map((edu, index) => (
                      <Card
                        key={index}
                        className="bg-gray-800 border border-white text-white shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-stagger"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardContent className="p-8 text-white">
                          <h3 className="font-semibold text-xl">{edu.title}</h3>
                          <p className="text-muted-foreground text-lg">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-3">
                            <Calendar className="w-4 h-4" />
                            {edu.year}
                          </p>
                          {edu.description && (
                            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{edu.description}</p>
                          )}
                          {edu.title === 'Junior Mobile Programmer' && (
                            <a
                              href="https://drive.google.com/file/d/19ss6hbb5nbvWG8mURybeTdIivyQslmzG/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button
                                className="mt-4 px-4 py-2 border border-primary text-primary rounded-lg text-sm hover:bg-primary hover:text-white transition-colors"
                                type="button"
                              >
                                Lihat Sertifikat
                              </button>
                            </a>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="organization">
                  <div className="space-y-4">
                    {organizations.map((org, index) => (
                      <Card
                        key={index}
                        className="bg-gray-800 border border-white text-white shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-stagger"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardContent className="p-8 text-white">
                          <h3 className="font-semibold text-xl">{org.title}</h3>
                          <p className="text-muted-foreground text-lg">{org.company}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-3">
                            <Calendar className="w-4 h-4" />
                            {org.year}
                          </p>
                          {org.description && (
                            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{org.description}</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right Column - About Me */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl font-bold mb-10 animate-fade-in-up">About Me</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg animate-fade-in-delayed">
                Mahasiswa semester 6 Teknologi Informasi. Seorang Linux enthusiast yang aktif menggunakan Linux untuk
                pengembangan dan produktivitas sehari-hari. Selain itu, saya juga memiliki hobi membaca untuk terus
                menambah wawasan dan memperdalam pemahaman di bidang teknologi.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg animate-fade-in-delayed-2">
                Berpengalaman dengan Jasa Pembuatan Sistem informasi Website, Mobile dan Design yang menggunakan Laravel, Flutter dan Figma. Saya memiliki hobby membaca dan terus belajar teknologi terbaru untuk meningkatkan skill development.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg animate-fade-in-delayed-3">
                Saat ini aktif sebagai developer di berbagai project dan memiliki pengalaman mengajar design grafis serta pengembangan website. Saya senang berkolaborasi dalam tim dan selalu eager untuk mempelajari teknologi baru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 