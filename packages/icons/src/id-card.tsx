import { mdiIdCard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IdCard(props: IconComponentProps) {
  return <Icon path={mdiIdCard} {...props} />;
}

export { mdiIdCard as path };
