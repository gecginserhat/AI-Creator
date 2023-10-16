import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";

const ConversationPage = () => {
    return (
        <div>
            <Heading
            title="Conversation"
            description="Our most advanced converdation model"
            icon={MessageSquare}
            iconColor="text-violet"
            bgColor="bg-violet-500/10"
            />
        </div>
    );

}

export default ConversationPage;