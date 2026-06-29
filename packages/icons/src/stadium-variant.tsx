import { mdiStadiumVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StadiumVariant(props: IconComponentProps) {
  return <Icon path={mdiStadiumVariant} {...props} />;
}

export { mdiStadiumVariant as path };
