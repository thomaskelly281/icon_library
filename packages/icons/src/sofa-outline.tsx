import { mdiSofaOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SofaOutline(props: IconComponentProps) {
  return <Icon path={mdiSofaOutline} {...props} />;
}

export { mdiSofaOutline as path };
