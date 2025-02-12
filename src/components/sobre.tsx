import Image from 'next/image'
import { FaleConosco } from './faleConosco'
import { Link } from 'lucide-react'

export const Sobre = () => {
  return (
    <div className="md:px-60 px-4 py-4 md:grid md:grid-cols-2 flex flex-col gap-5">
      <div>
        <Image src="/imagens/sobre-1.jpg" alt="Sobre" width={437} height={557} />
      </div>
      <div className="flex flex-col gap-3">
        <p>
          <Link size={30} className="text-primary" />
        </p>
        <p className="text-lg text-slate-700">Sobre nós</p>
        <div className="text-3xl text-slate-700 font-bold pl-10">
          <p className="">Anos de experiência no</p>
          <p className="text-primary pl-4">setor de ensino</p>
        </div>
        <div className="text-xl flex flex-col gap-5 text-slate-700">
          <p>
            Somos uma instituição de ensino comprometida com a excelência acadêmica e o
            desenvolvimento integral de seus alunos. Com uma equipe pedagógica qualificada,
            infraestrutura moderna e uma abordagem inovadora, oferecemos um ambiente que estimula o
            aprendizado e o crescimento pessoal.
          </p>
          <p>
            Aqui, os estudantes têm acesso a tecnologia, atividades extracurriculares e um ensino de
            qualidade, preparando-se para os desafios do futuro com conhecimento, valores e
            autonomia. Venha fazer parte da nossa comunidade educacional!
          </p>
          <FaleConosco />
        </div>
      </div>
    </div>
  )
}
