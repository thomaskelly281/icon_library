import { mdiMenorahFire } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MenorahFire(props: IconComponentProps) {
  return <Icon path={mdiMenorahFire} {...props} />;
}

export { mdiMenorahFire as path };
