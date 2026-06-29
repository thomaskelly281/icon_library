import { mdiBrain } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Brain(props: IconComponentProps) {
  return <Icon path={mdiBrain} {...props} />;
}

export { mdiBrain as path };
