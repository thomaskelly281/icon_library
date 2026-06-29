import { mdiAccountCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountCogOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountCogOutline} {...props} />;
}

export { mdiAccountCogOutline as path };
