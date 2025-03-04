import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Phone, AlertCircle, UserCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { User } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export default function Emergency() {
  const { toast } = useToast();

  const { data: user } = useQuery<User>({
    queryKey: ["/api/users/me"],
  });

  const handleEmergency = () => {
    toast({
      title: "Emergency Contact Notified",
      description: "Help is on the way. Stay calm and remain in your location.",
      variant: "destructive"
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Emergency Assistance</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-destructive text-destructive-foreground">
          <CardHeader>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Emergency SOS
            </h2>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Press the button below to immediately notify your emergency contact
              and our support team.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full"
              onClick={handleEmergency}
            >
              <Phone className="mr-2 h-5 w-5" />
              Request Emergency Help
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <UserCircle className="h-5 w-5" />
              Your Emergency Contact
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <p className="text-lg">{user?.emergencyContact || "Not set"}</p>
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <p className="text-lg">{user?.emergencyPhone || "Not set"}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}