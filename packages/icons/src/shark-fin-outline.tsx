import { mdiSharkFinOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SharkFinOutline(props: IconComponentProps) {
  return <Icon path={mdiSharkFinOutline} {...props} />;
}

export { mdiSharkFinOutline as path };
