import Image from 'next/image'
import { CardCheck } from './cardCheck'
import { GraduationCap } from 'lucide-react'

export const CheckSite = () => {
  return (
    <div className="md:grid md:grid-cols-2 bg-primary">
      <div className="bg-[url(/imagens/escola.png)] bg-cover"></div>
      <div className="text-slate-100 p-10 flex flex-col gap-4">
        <p className="font-mono text-3xl">Hesitar em entrar?</p>
        <h1 className="font-bold text-4xl">
          Somos a melhor escolha<br></br> Para o seu filho
        </h1>
        <p className="text-xl">
          Como uma palavra do nosso coração, adoramos dedicar às crianças as coisas valiosas da
          vida. Uma ótima educação é essencial para um desenvolvimento sólido tanto na alma quanto
          na mente das crianças. Vamos com as crianças para brincar, aprender e crescer melhor.
        </p>
        <div className="p-5 flex flex-col gap-5">
          <CardCheck
            numero="01"
            titulo="Profissionais Bem Treinados"
            descricao="Profissionais altamente capacitado para educar e auxiliar no desenvolvimento do seu filho"
          />
          <CardCheck
            numero="02"
            titulo="Padrões de aula internacionais"
            descricao="Com diversos treinamentos e formações academicas usamos um padrão internacional de educação, trazendo sempre o melhor para seu filho"
          />
          <CardCheck
            numero="03"
            titulo="Infraestrutura incrível"
            descricao="Aqui você conta com uma grande estrutura e conforto em todas a instituição, tranzendo assim uma confiabilidade educacional"
          />
        </div>
        <div className="flex items-center justify-center">
          <GraduationCap size={50} />
        </div>
      </div>
    </div>
  )
}
