import { mdiCastEducation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CastEducation(props: IconComponentProps) {
  return <Icon path={mdiCastEducation} {...props} />;
}

export { mdiCastEducation as path };
