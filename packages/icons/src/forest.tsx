import { mdiForest } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Forest(props: IconComponentProps) {
  return <Icon path={mdiForest} {...props} />;
}

export { mdiForest as path };
