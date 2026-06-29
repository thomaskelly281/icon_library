import { mdiClouds } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Clouds(props: IconComponentProps) {
  return <Icon path={mdiClouds} {...props} />;
}

export { mdiClouds as path };
