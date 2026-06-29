import { mdiRhombusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RhombusOutline(props: IconComponentProps) {
  return <Icon path={mdiRhombusOutline} {...props} />;
}

export { mdiRhombusOutline as path };
