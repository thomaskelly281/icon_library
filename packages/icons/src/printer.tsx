import { mdiPrinter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Printer(props: IconComponentProps) {
  return <Icon path={mdiPrinter} {...props} />;
}

export { mdiPrinter as path };
