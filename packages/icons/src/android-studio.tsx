import { mdiAndroidStudio } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AndroidStudio(props: IconComponentProps) {
  return <Icon path={mdiAndroidStudio} {...props} />;
}

export { mdiAndroidStudio as path };
