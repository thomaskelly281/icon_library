import { mdiBellCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellCogOutline(props: IconComponentProps) {
  return <Icon path={mdiBellCogOutline} {...props} />;
}

export { mdiBellCogOutline as path };
