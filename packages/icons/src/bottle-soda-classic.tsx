import { mdiBottleSodaClassic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BottleSodaClassic(props: IconComponentProps) {
  return <Icon path={mdiBottleSodaClassic} {...props} />;
}

export { mdiBottleSodaClassic as path };
