import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">管理設定</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>ガチャ設定</CardTitle>
            <CardDescription>ガチャの当選確率と天井機能の設定</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label>設定1の当選確率 (10%)</Label>
                <Slider
                  defaultValue={[10]}
                  max={100}
                  step={1}
                  className="mt-2"
                />
              </div>
              <div>
                <Label>設定6の当選確率 (100%)</Label>
                <Slider
                  defaultValue={[100]}
                  max={100}
                  step={1}
                  className="mt-2"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="ceiling" />
              <Label htmlFor="ceiling">天井機能を有効にする</Label>
            </div>

            <div>
              <Label>天井到達回数</Label>
              <Input type="number" placeholder="100" className="mt-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>タスク設定</CardTitle>
            <CardDescription>
              タスクの基本設定とポイント付与の設定
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>基本ポイント倍率</Label>
              <Input type="number" placeholder="1.0" className="mt-2" />
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="auto-reset" />
              <Label htmlFor="auto-reset">年間タスクの自動リセット</Label>
            </div>
          </CardContent>
        </Card>

        <Button className="w-full">設定を保存</Button>
      </div>
    </div>
  );
}
