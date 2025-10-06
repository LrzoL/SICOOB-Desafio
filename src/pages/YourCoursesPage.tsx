import Card from "../components/Card.tsx";

export default function YourCourssesPage() {
  return (
    <div className="min-h-screen flex flex-col p-20 gap-10">
      <h2 className="font-bold text-lg">Tecnologia e Informação</h2>
      <div className="flex-row space-y-4 overflow-auto lg:space-y-0 lg:flex lg:space-x-4">
      <Card title="Técnico em Informática" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Desenvolvimento de Sistemas" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Redes de Computadores" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Cybersecurity Básico" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Suporte Técnico TI" description="Cunhão" imageUrl="cunhão"></Card>
      </div>
      <h2 className="font-bold text-lg">Energia e Sustentabilidade</h2>
      <div className="flex-row space-y-4 overflow-auto lg:space-y-0 lg:flex lg:space-x-4">
      <Card title="Técnico em Instalações Elétricas" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Energias Renováveis" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Eficiência Energética" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Manutenção de Sistemas Fotovoltaicos" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Eletrotécnica" description="Cunhão" imageUrl="cunhão"></Card>
      </div>
      <h2 className="font-bold text-lg">Indústria e Manufatura</h2>
      <div className="flex-row space-y-4 overflow-auto lg:space-y-0 lg:flex lg:space-x-4">
      <Card title="Técnico em Mecânica Industrial" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Eletromecânica" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Manutenção de Máquinas" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Logística e Armazenagem" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Siderurgia" description="Cunhão" imageUrl="cunhão"></Card>
      </div>
      <h2 className="font-bold text-lg">Saúde e Bem-estar</h2>
      <div className="flex-row space-y-4 overflow-auto lg:space-y-0 lg:flex lg:space-x-4">
      <Card title="Técnico em Enfermagem" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Saúde Bucal" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Farmácia" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Cuidador de Idosos" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Primeiros Socorros" description="Cunhão" imageUrl="cunhão"></Card>
      </div>
      <h2 className="font-bold text-lg">Serviços e Empreendedorismo</h2>
      <div className="flex-row space-y-4 overflow-auto lg:space-y-0 lg:flex lg:space-x-4">
      <Card title="Técnico em Administração" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Vendas e Atendimento" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Empreendedorismo" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Gestão de Pequenos Negócio" description="Cunhão" imageUrl="cunhão"></Card>
      <Card title="Técnico em Logística" description="Cunhão" imageUrl="cunhão"></Card>
      </div>
    </div>
  );
}
