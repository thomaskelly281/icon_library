import { mdiApplicationVariableOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationVariableOutline(props: IconComponentProps) {
  return <Icon path={mdiApplicationVariableOutline} {...props} />;
}

export { mdiApplicationVariableOutline as path };
