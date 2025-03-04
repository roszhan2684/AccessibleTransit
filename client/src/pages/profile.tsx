import { useQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { User } from "@shared/schema";
import { Coins, Award } from "lucide-react";

export default function Profile() {
  const { data: user } = useQuery<User>({
    queryKey: ["/api/users/me"],
  });

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Your Profile</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Coins className="h-5 w-5" />
              Transit Credits
            </h2>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-4">{user.credits} miles</div>
            <p className="text-muted-foreground mb-4">
              Earn 10 free miles for every 50 miles traveled!
            </p>
            <Progress value={(user.credits % 50) * 2} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">
              {50 - (user.credits % 50)} miles until your next reward
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Award className="h-5 w-5" />
              Emergency Contacts
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Contact Name</label>
                <p className="text-lg">{user.emergencyContact || "Not set"}</p>
              </div>
              <div>
                <label className="text-sm font-medium">Contact Phone</label>
                <p className="text-lg">{user.emergencyPhone || "Not set"}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
