// components/ChatModal.tsx
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MessageSquare } from 'lucide-react';

interface Lead {
  name: string;
  sessionId?: string;
  assignedAgent?: string;
}

interface ChatModalProps {
  lead: Lead;
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ lead, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-modal hide-scrollbar" style={{ maxWidth: "min(640px, calc(100vw - 24px))", maxHeight: "calc(100vh - 32px)" }}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-slate-100" style={{ fontSize: "clamp(15px, 1.2vw, 18px)" }}>
            <MessageSquare size={18} />
            Chat with {lead.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center justify-center text-slate-300" style={{ height: "min(400px, 50vh)", fontSize: "clamp(13px, 1vw, 15px)" }}>
            Chat functionality is currently disabled
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatModal;
