import { mdiMedicalCottonSwab } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MedicalCottonSwab(props: IconComponentProps) {
  return <Icon path={mdiMedicalCottonSwab} {...props} />;
}

export { mdiMedicalCottonSwab as path };
