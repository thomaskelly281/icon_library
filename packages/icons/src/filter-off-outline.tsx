import { mdiFilterOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterOffOutline(props: IconComponentProps) {
  return <Icon path={mdiFilterOffOutline} {...props} />;
}

export { mdiFilterOffOutline as path };
