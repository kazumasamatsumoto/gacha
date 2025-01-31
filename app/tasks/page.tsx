import { TaskCard } from "@/components/task-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DUMMY_TASKS = [
  {
    id: "1",
    type: "regular" as const,
    title: "水やり",
    progress: 50,
    totalProgress: 100,
    dueDate: "2024-01-20",
  },
  {
    id: "2",
    type: "periodic" as const,
    title: "害虫駆除",
    progress: 3,
    totalProgress: 15,
    dueDate: "毎日実施",
  },
  {
    id: "3",
    type: "regular" as const,
    title: "収穫",
    progress: 80,
    totalProgress: 100,
    dueDate: "2024-01-21",
  },
  {
    id: "4",
    type: "periodic" as const,
    title: "施肥",
    progress: 12,
    totalProgress: 30,
    dueDate: "3日毎実施",
  },
];

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-yellow-500">
          農作業タスク
        </h1>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800/50">
            <TabsTrigger value="all">すべて</TabsTrigger>
            <TabsTrigger value="regular">通常演算</TabsTrigger>
            <TabsTrigger value="periodic">周期演算</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {DUMMY_TASKS.map((task) => (
              <TaskCard key={task.id} {...task} />
            ))}
          </TabsContent>

          <TabsContent value="regular" className="space-y-4">
            {DUMMY_TASKS.filter((task) => task.type === "regular").map(
              (task) => (
                <TaskCard key={task.id} {...task} />
              )
            )}
          </TabsContent>

          <TabsContent value="periodic" className="space-y-4">
            {DUMMY_TASKS.filter((task) => task.type === "periodic").map(
              (task) => (
                <TaskCard key={task.id} {...task} />
              )
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
