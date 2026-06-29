import { mdiWrenchCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WrenchCog(props: IconComponentProps) {
  return <Icon path={mdiWrenchCog} {...props} />;
}

export { mdiWrenchCog as path };
