"use client";

import {
  Dialog as HeadlessDialog,
  DialogPanel,
  DialogProps,
  DialogPanelProps,
} from "@headlessui/react";
import { cn } from "@/lib/utils";

export default function Dialog(props: DialogProps) {
  return (
    <HeadlessDialog {...props} className={cn("lg:hidden")}>
      {props.children}
    </HeadlessDialog>
  );
}

export function DialogContent(props: DialogPanelProps) {
  return (
    <DialogPanel
      className={cn(
        "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      )}
    >
      {props.children}
    </DialogPanel>
  );
}
