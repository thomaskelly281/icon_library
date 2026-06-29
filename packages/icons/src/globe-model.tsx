import { mdiGlobeModel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GlobeModel(props: IconComponentProps) {
  return <Icon path={mdiGlobeModel} {...props} />;
}

export { mdiGlobeModel as path };
