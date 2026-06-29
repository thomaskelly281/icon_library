import { mdiGlobeLightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GlobeLightOutline(props: IconComponentProps) {
  return <Icon path={mdiGlobeLightOutline} {...props} />;
}

export { mdiGlobeLightOutline as path };
