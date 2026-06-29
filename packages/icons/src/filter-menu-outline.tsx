import { mdiFilterMenuOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterMenuOutline(props: IconComponentProps) {
  return <Icon path={mdiFilterMenuOutline} {...props} />;
}

export { mdiFilterMenuOutline as path };
