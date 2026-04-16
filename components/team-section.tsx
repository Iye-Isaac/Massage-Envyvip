const team = [
  {
    name: "Sarah Mitchell",
    role: "Lead Therapist & Founder",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    specialties: ["Deep Tissue", "Sports Massage"]
  },
  {
    name: "Michael Chen",
    role: "Senior Massage Therapist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    specialties: ["Hot Stone", "Swedish"]
  },
  {
    name: "Emma Rodriguez",
    role: "Wellness Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    specialties: ["Aromatherapy", "Prenatal"]
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Meet The Team
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Expert Hands, Caring Hearts
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our certified therapists are passionate about helping you feel your best. 
            Each brings unique skills and specializations to our practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div 
                className="aspect-[3/4] bg-cover bg-center rounded-lg mb-6 overflow-hidden"
                style={{ backgroundImage: `url('${member.image}')` }}
              >
                <div className="w-full h-full bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((specialty) => (
                  <span 
                    key={specialty}
                    className="text-xs px-3 py-1 bg-background rounded-full text-muted-foreground"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
