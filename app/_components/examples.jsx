import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Examples() {
  const examples = [
    {
      image: "/placeholder.svg?height=400&width=400",
      title: "Tech Startup",
      category: "Technology",
    },
    {
      image: "/placeholder.svg?height=400&width=400",
      title: "Fashion Brand",
      category: "Fashion",
    },
    {
      image: "/placeholder.svg?height=400&width=400",
      title: "Restaurant Chain",
      category: "Food",
    },
    {
      image: "/placeholder.svg?height=400&width=400",
      title: "Fitness App",
      category: "Health",
    },
  ];

  return (
    <section id="examples" className="py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Logo Examples
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Discover what LogoGenie can create for your brand
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={example.image || "/placeholder.svg"}
                alt={example.title}
                width={400}
                height={400}
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 p-6 flex flex-col justify-end">
                <h3 className="font-semibold text-lg text-foreground">
                  {example.title}
                </h3>
                <Badge variant="secondary" className="w-fit mt-2">
                  {example.category}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
