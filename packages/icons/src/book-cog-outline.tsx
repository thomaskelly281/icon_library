import { mdiBookCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookCogOutline(props: IconComponentProps) {
  return <Icon path={mdiBookCogOutline} {...props} />;
}

export { mdiBookCogOutline as path };
