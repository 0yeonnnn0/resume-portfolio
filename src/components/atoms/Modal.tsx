import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  title: string;
}

export function Modal({ trigger, content, title }: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">{trigger}</div>
      </DialogTrigger>
      {/* 이부분 나중에 수정, 사이즈는 커스텀해주는걸로, sm, md, lg, xl 사이즈로 구분 */}
      <DialogContent className="w-full max-w-screen-xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
}
