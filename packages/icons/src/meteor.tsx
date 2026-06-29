import { mdiMeteor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Meteor(props: IconComponentProps) {
  return <Icon path={mdiMeteor} {...props} />;
}

export { mdiMeteor as path };
