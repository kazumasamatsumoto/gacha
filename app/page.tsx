import { NavCard } from "@/components/nav-card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900/20 to-indigo-900/20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            農業タスク管理システム
          </h1>
          <p className="text-purple-200/80 text-lg max-w-2xl mx-auto">
            タスクを管理し、ガチャを楽しみ、報酬を獲得しましょう
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <NavCard
            href="/tasks"
            title="タスク管理"
            description="農作業のタスクを管理し、進捗を記録します"
            iconName="📋"
          />
          <NavCard
            href="/gacha"
            title="ガチャ"
            description="獲得したポイントでガチャを回して報酬をゲット"
            iconName="🎁"
          />
          <NavCard
            href="/exchange"
            title="アイテム交換所"
            description="獲得したアイテムを交換して報酬を入手"
            iconName="🏪"
          />
          <NavCard
            href="/admin/settings"
            title="管理設定"
            description="システムの設定を管理します"
            iconName="⚙️"
          />
        </div>
      </div>
    </div>
  );
}
