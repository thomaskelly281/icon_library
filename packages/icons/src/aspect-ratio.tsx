import { mdiAspectRatio } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AspectRatio(props: IconComponentProps) {
  return <Icon path={mdiAspectRatio} {...props} />;
}

export { mdiAspectRatio as path };
