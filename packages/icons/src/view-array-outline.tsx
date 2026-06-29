import { mdiViewArrayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewArrayOutline(props: IconComponentProps) {
  return <Icon path={mdiViewArrayOutline} {...props} />;
}

export { mdiViewArrayOutline as path };
