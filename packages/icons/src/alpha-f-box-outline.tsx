import { mdiAlphaFBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaFBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiAlphaFBoxOutline} {...props} />;
}

export { mdiAlphaFBoxOutline as path };
