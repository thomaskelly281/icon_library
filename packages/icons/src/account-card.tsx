import { mdiAccountCard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountCard(props: IconComponentProps) {
  return <Icon path={mdiAccountCard} {...props} />;
}

export { mdiAccountCard as path };
