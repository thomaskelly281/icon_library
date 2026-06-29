import { mdiFilterCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterCogOutline(props: IconComponentProps) {
  return <Icon path={mdiFilterCogOutline} {...props} />;
}

export { mdiFilterCogOutline as path };
