import { mdiHumanMaleHeight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanMaleHeight(props: IconComponentProps) {
  return <Icon path={mdiHumanMaleHeight} {...props} />;
}

export { mdiHumanMaleHeight as path };
